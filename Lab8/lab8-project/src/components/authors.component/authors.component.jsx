import { useEffect, useState } from "react";
import { getAuthors, getPostsByAuthorId } from "../../services/blogService";
import { Post } from "../post.component/post.component";
import { Loader } from "../loader.component/loader.component";
import classes from "./authors.module.css";

export const AuthorsComponent = () => {
    const [authorsData, setAuthorsData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const authors = await getAuthors(); //
            const data = await Promise.all(
                authors.map(async (author) => {
                    const posts = await getPostsByAuthorId(author.id); //
                    return { ...author, posts };
                })
            );
            setAuthorsData(data);
            setIsLoaded(true);
        };
        fetchData();
    }, []);

    if (!isLoaded) return <Loader />;

    return (
        <div className={classes.page}>
            <h2>Authors page</h2>
            {authorsData.map(author => (
                <div key={author.id} className={classes.authorRow}>
                    <div className={classes.authorInfo}>
                        <div className={classes.avatar}></div>
                        <div>
                            <div>{author.name}</div>
                            <div>{author.email}</div>
                            <div>{author.phone}</div>
                        </div>
                    </div>
                    <div className={classes.postsContainer}>
                        {author.posts.map(post => (
                            <Post key={post.id} {...post} isShortView={true} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};