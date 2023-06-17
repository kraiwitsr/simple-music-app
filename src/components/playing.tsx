import React from 'react';
import '../static/style.css';
import MediaControlCard from './MediaControlCard';

interface Props {
    isPlaying: boolean;
    setisPlaying: React.Dispatch<React.SetStateAction<boolean>>
    songs: {
        title: string;
        source: string;
    }[];
    currentSong: {
        title: string;
        source: string;
    };
    setCurrentSong: React.Dispatch<React.SetStateAction<{
        title: string;
        source: string;
    }>>;
}

const playing = ({
    setisPlaying,
    setCurrentSong,
    isPlaying,
    songs,
    currentSong,
}: Props) => {

    const togglePlay = (): void => {
        setisPlaying(!isPlaying);
    }

    const skipBack = (): void => {
        const index = songs.findIndex(
            x => x.title === currentSong.title);
        index === 0 ? setCurrentSong(songs[songs.length - 1]) :
            setCurrentSong(songs[index - 1]);
    }

    const skipNext = (): void => {
        const index = songs.findIndex(
            x => x.title === currentSong.title);
        index === songs.length - 1 ? setCurrentSong(songs[0])
            : setCurrentSong(songs[index + 1]);
    }

    return (
        <div>
            <div className="pure-menu pure-menu-horizontal">
                <a href="/" className="pure-menu-heading">Home</a>
                {/* <!-- <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Pricing</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
                </ul> --> */}
            </div>

            <div className="banner">
                <h1 className="banner-head">
                    Simple Music App. <br />
                    Try before.
                </h1>
            </div>

            <div className="l-content">
                <div className="information pure-g">
                    <div className="pure-u-1 pure-u-md-1-2">
                        <div className="l-box">
                            <h3 className="information-head">Get started today</h3>
                            <MediaControlCard
                                {...{
                                    togglePlay,
                                    isPlaying,
                                    currentSong,
                                    skipBack,
                                    skipNext,
                                }}
                            />
                        </div>
                    </div>

                    <div className="pure-u-1 pure-u-md-1-2">
                        <div className="l-box">
                            <h3 className="information-head">Pay monthly or annually</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                        </div>
                    </div>

                    <div className="pure-u-1 pure-u-md-1-2">
                        <div className="l-box">
                            <h3 className="information-head">24/7 customer support</h3>
                            <p>
                                Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    <div className="pure-u-1 pure-u-md-1-2">
                        <div className="l-box">
                            <h3 className="information-head">Cancel your plan anytime</h3>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer l-box" />
        </div>
    )
}

export default playing