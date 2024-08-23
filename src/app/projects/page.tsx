import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default async function ProjectsPage(){
    return (
        <BlurFade delay={BLUR_FADE_DELAY}>
            Hi
        </BlurFade>
    )
}
