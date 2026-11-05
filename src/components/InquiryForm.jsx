import { useId, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { submitInquiry } from "@/lib/inquiries";

function messageFor(field, value) {
	const text = String(value ?? "");
	const trimmed = text.trim();
	if (field.required && !trimmed) return `${field.label} is required.`;
	if (!trimmed) return "";
	if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
		return "Enter a valid email address.";
	}
	if (field.type === "tel" && trimmed.replace(/\D/g, "").length < 8) {
		return "Enter a phone number with at least 8 digits.";
	}
	if (field.type === "url" && !/^https?:\/\/\S+\.\S+/.test(trimmed)) {
		return "Enter a full URL starting with http:// or https://.";
	}
	if (field.minLength && trimmed.length < field.minLength) {
		return `${field.label} should be at least ${field.minLength} characters.`;
	}
	return "";
}

function emptyValues(fields, initialValues) {
	return Object.fromEntries(fields.map((field) => [field.name, initialValues[field.name] ?? ""]));
}

export default function InquiryForm({
	id,
	intent,
	fields,
	initialValues = {},
	submitLabel,
	successTitle,
	successDetail,
}) {
	const formId = useId();
	const [values, setValues] = useState(() => emptyValues(fields, initialValues));
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState("idle");
	const [formError, setFormError] = useState("");
	const [submitted, setSubmitted] = useState(null);

	function update(name, value) {
		setValues((current) => ({ ...current, [name]: value }));
		setErrors((current) => ({ ...current, [name]: "" }));
		if (status === "invalid") setStatus("idle");
	}

	async function onSubmit(event) {
		event.preventDefault();
		const nextErrors = {};
		fields.forEach((field) => {
			const message = messageFor(field, values[field.name]);
			if (message) nextErrors[field.name] = message;
		});
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length) {
			setStatus("invalid");
			setFormError("Please correct the highlighted fields. What you entered is still here.");
			const first = fields.find((field) => nextErrors[field.name]);
			document.getElementById(`${formId}-${first.name}`)?.focus();
			return;
		}

		if (values.company_website) {
			setSubmitted({ ...values });
			setStatus("success");
			return;
		}

		setStatus("submitting");
		setFormError("");
		const payload = { intent };
		fields.forEach((field) => {
			payload[field.name] = String(values[field.name] ?? "").trim();
		});

		try {
			await submitInquiry(payload);
			setSubmitted(payload);
			setStatus("success");
		} catch (error) {
			setStatus("error");
			setFormError(error.message || "We could not send this. Your details are still in the form.");
		}
	}

	function reset() {
		setValues(emptyValues(fields, initialValues));
		setErrors({});
		setStatus("idle");
		setFormError("");
		setSubmitted(null);
	}

	if (status === "success" && submitted) {
		return (
			<div role="status" className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm">
				<CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden="true" />
				<h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#142033]">{successTitle}</h2>
				<p className="mt-3 text-[#3d516c]">{successDetail(submitted)}</p>
				<button type="button" className="btn btn-line mt-6" onClick={reset}>
					Send another
				</button>
			</div>
		);
	}

	return (
		<form id={id} className="rounded-3xl border border-[#e4ebf4] bg-white p-6 shadow-sm sm:p-8" onSubmit={onSubmit} noValidate>
			{formError && (
				<div role="alert" className="mb-5 flex gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
					<AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
					<div>
						<p className="font-semibold">{status === "invalid" ? "This form is not ready to send." : "This form was not sent."}</p>
						<p className="mt-1">{formError}</p>
					</div>
				</div>
			)}

			<div className="grid gap-5 sm:grid-cols-2">
				{fields.map((field) => {
					const fieldId = `${formId}-${field.name}`;
					const error = errors[field.name];
					const describedBy = error ? `${fieldId}-error` : undefined;
					const common = {
						id: fieldId,
						name: field.name,
						value: values[field.name],
						required: field.required || undefined,
						"aria-required": field.required || undefined,
						"aria-invalid": error ? true : undefined,
						"aria-describedby": describedBy,
						autoComplete: field.autoComplete,
						onChange: (event) => update(field.name, event.target.value),
					};
					return (
						<div key={field.name} className={`field ${field.full ? "sm:col-span-2" : ""}`}>
							<label htmlFor={fieldId}>
								{field.label}
								{field.required ? <span className="text-[#c2410c]"> *</span> : null}
							</label>
							{field.type === "textarea" ? (
								<textarea {...common} rows={field.rows || 6} />
							) : field.type === "select" ? (
								<select {...common}>
									{field.options.map((option) => (
										<option key={option.value || "empty"} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							) : (
								<input {...common} type={field.type || "text"} inputMode={field.inputMode} />
							)}
							{error ? (
								<p id={`${fieldId}-error`} className="text-sm font-medium text-red-700">
									{error}
								</p>
							) : null}
						</div>
					);
				})}
			</div>

			<div className="sr-only" aria-hidden="true">
				<label htmlFor={`${formId}-website`}>Leave this field blank</label>
				<input
					id={`${formId}-website`}
					name="company_website"
					tabIndex={-1}
					autoComplete="off"
					value={values.company_website || ""}
					onChange={(event) => update("company_website", event.target.value)}
				/>
			</div>

			<div className="mt-6 flex flex-wrap items-center gap-4">
				<button type="submit" className="btn btn-orange" disabled={status === "submitting"}>
					{status === "submitting" ? "Sending…" : submitLabel}
				</button>
				<p className="text-sm text-[#5c6d84]">Fields marked * are required.</p>
			</div>
		</form>
	);
}
