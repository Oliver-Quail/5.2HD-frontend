import header from "../../assets/header.png";


const Home = () => {
    return (
        <header className="w-full h-screen flex flex-col items-center" style={{ backgroundImage: `url(${header})` }}>
            <h1 className="text-white scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Aborignal Art Gallery</h1>
        </header>
    )
}

export default Home;