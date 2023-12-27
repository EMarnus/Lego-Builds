import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import appStyles from "../../App.module.css";
import styles from "../../styles/PopularPost.module.css";

const PopularPost = (props) => {
	const { id, title, image } = props;

	return (
		<Card className={`${styles.Post} ${appStyles.BoxShadow}`}>
			<Link to={`/posts/${id}`}>
				<Card.Img
					className={appStyles.ImageHover}
					src={image}
					alt={title}
				/>
			</Link>
			<Card.Body className={styles.Card}>
				{title && (
					<Card.Title className={`${styles.Title} ${"text-center"}`}>
						{title}
					</Card.Title>
				)}
			</Card.Body>
		</Card>
	);
};

export default PopularPost;
