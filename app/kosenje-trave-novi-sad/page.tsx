import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { getLocation } from "@/lib/locations";
import { LocationPage } from "@/components/sections/LocationPage";

const loc = getLocation("kosenje-trave-novi-sad");

export const metadata = buildMetadata({
  title: loc.title,
  description: loc.description,
  url: `${SITE_URL}/${loc.slug}`,
  image: loc.image,
});

export default function Page() {
  return <LocationPage loc={loc} />;
}
