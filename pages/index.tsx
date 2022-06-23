import type { NextPage } from "next";
import { useContext } from "react";
import { HomeHardware, Layout } from "../components/Layout";
import { UiContext } from "../src/context";
import { generateUID, uid, uuidv4 } from "../src/utils/uuid";

const Index: NextPage = () => {
	console.log(uuidv4())
	console.log(generateUID())
	console.log(uid())
	const { site, toggleSideSearch, toggleSideCart } = useContext(UiContext)
	return (
		<Layout
			title={site.title}
			pageDescription={site.description}
			imageFullUrl={site.logo}
		>
			<HomeHardware />
		</Layout>
	);
};
export default Index;