import type { Route } from "../+types/Home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home" },
        {   name: "Description", 
            content: "Home - Welcome to React Router!" 
        },
    ];
}

const Home = () => {
    return (
        <section className="home">
            <h1>Welcome to the homepage</h1>
        </section>
    )
};

export default Home;