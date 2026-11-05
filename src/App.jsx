import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import CompanyVideo from "@/pages/CompanyVideo";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Industries from "@/pages/Industries";
import IndustryDetail from "@/pages/IndustryDetail";
import JobDetail from "@/pages/JobDetail";
import NotFound from "@/pages/NotFound";
import ProductDetail from "@/pages/ProductDetail";
import Products from "@/pages/Products";
import Quote from "@/pages/Quote";
import ServiceDetail from "@/pages/ServiceDetail";
import Services from "@/pages/Services";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="services" element={<Services />} />
				<Route path="services/:slug" element={<ServiceDetail />} />
				<Route path="products" element={<Products />} />
				<Route path="products/:slug" element={<ProductDetail />} />
				<Route path="industries" element={<Industries />} />
				<Route path="industries/:slug" element={<IndustryDetail />} />
				<Route path="careers" element={<Careers />} />
				<Route path="careers/apply" element={<JobDetail />} />
				<Route path="careers/:slug" element={<JobDetail />} />
				<Route path="contact" element={<Contact />} />
				<Route path="quote" element={<Quote />} />
				<Route path="get-a-quote" element={<Navigate to="/quote" replace />} />
				<Route path="company-video" element={<CompanyVideo />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
