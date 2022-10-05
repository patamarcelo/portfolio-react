import './home-page.styles.css'
import MediaCard from '../card/card-component'

const HomePage = () => {
    return (
        <>
        <div className="bg-red-300 my-10 flex flex-column w-full p-10 items-center justify-center">
            <h1 className='title'>HOME PAGE</h1>
        </div>
        <div className="flex justify-between w-full flex-wrap">
            <div className="flex flex-col mt-5 mx-0.5">
            <MediaCard className="media-card-container"/>
            </div>

            <div className="flex flex-col mt-5">
            <MediaCard className="media-card-container"/>
            </div>
            <div className="flex flex-col mt-5">
            <MediaCard className="media-card-container"/>
            </div>
            <div className="flex flex-col mt-5">
            <MediaCard className="media-card-container"/>
            </div>
            <div className="flex flex-col mt-5">
            <MediaCard className="media-card-container"/>
            </div>
        </div>

        </>
    )
}

export default HomePage;