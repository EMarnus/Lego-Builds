import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";

import PopularPost from "./PopularPost";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PopularPosts.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PopularPosts({ mobile, message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get("/posts/");
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, pathname, currentUser]);

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      } ${
        styles.PopularBuilds
      }`}
    >
      {hasLoaded ? (
        <>
          <p className={styles.Title}>
            Most Liked Builds
          </p>
          {posts.results.length ? (
            <>
              {posts.results
                .sort((a, b) => a.likes_count - b.likes_count)
                .reverse()
                .slice(0, 3)
                .map((post) => (
                  <PopularPost key={post.id} {...post} setPosts={setPosts} />
                ))}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset src={NoResults} message={message} />
            </Container>
          )}
        </>
      ) : (
        <Container className={appStyles.Content}>
          <Asset spinner />
        </Container>
      )}
    </Container>
  );
}

export default PopularPosts;