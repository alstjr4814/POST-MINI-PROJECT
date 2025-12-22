import { css } from "@emotion/react";
import LeftSideBar from "../../components/common/LeftSideBar";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useGetFeeds } from "../../queries/postQueries";
import Loading from "../../components/common/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
    const { isLoading, data } = useGetFeeds();
    console.log("isLoading:", isLoading);
    console.log("data", data);

    return <div css={s.layout}>
        <div css={s.feedContainer}>
            {
                (isLoading && <Loading />) || data.pages.map(feeds => feeds.data.contents.map(feed => (
            <div key={feed.feedId} css={s.feedContainer}>
                <header>
                    <div css={s.profileImage(feed.user.imgUrl)}></div>
                    <div css={s.userInfo}>
                        <div>{feed.user.nickname}</div>
                        <div>{feed.createdAt}</div>
                    </div>
                </header>
                <main>
                    <div css={s.feedImageContainer}>

                    </div>
                    <div css={s.feedContentContainer}>
                        <Slider dots = {true}
                            infinite= {true}
                            speed= {500}
                            slidesToShow= {1}
                            slidesToScroll = {1}>
                                <div>
                                    <h1>1</h1>
                                </div>
                                <div>
                                    <h1>2</h1>
                                </div>
                                <div>
                                    <h1>3</h1>
                                </div>
                        </Slider>
                    </div>
                </main>
                <footer></footer>
            </div>  
                )))
            }
        </div>
        <div css={s.followInfoCotainer}>
            
        </div>
    </div>
}

export default Home;