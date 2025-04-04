import type { Route } from "../views/+types/About";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "About" },
        {   name: "Description", 
            content: "About - Welcome to React Router!" 
        },
    ];
}
function About () {
    return (
        <div className="about">
            <h1 className="heading">About</h1>
        </div>
    )
};

export default About;