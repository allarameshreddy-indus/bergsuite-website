const STORAGE_KEY = "kriyzen.inquiries";

export async function submitInquiry(payload) {
	if (typeof navigator !== "undefined" && navigator.onLine === false) {
		const error = new Error("You appear to be offline. Your details are still in the form. Reconnect and send again.");
		error.code = "offline";
		throw error;
	}

	if (import.meta.env.DEV) {
		try {
			const response = await fetch("/api/inquiries", {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify(payload),
			});
			const contentType = response.headers.get("content-type") || "";
			if (contentType.includes("application/json")) {
				const data = await response.json();
				if (!response.ok) {
					const error = new Error(data.message || "We could not send this. Your details are still in the form.");
					error.code = "rejected";
					throw error;
				}
				return { id: data.id, via: "api" };
			}
		} catch (error) {
			if (error.code === "rejected") throw error;
			if (typeof navigator !== "undefined" && navigator.onLine === false) {
				const offline = new Error("You appear to be offline. Your details are still in the form. Reconnect and send again.");
				offline.code = "offline";
				throw offline;
			}
		}
	}

	const record = {
		...payload,
		id: crypto.randomUUID(),
		submittedAt: new Date().toISOString(),
	};
	const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
	existing.push(record);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
	return { id: record.id, via: "local" };
}
