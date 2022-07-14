import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../constants/Api";

function ProductsDetail() {
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let navigate = useNavigate();

	const { id } = useParams();

	if (!id) {
		navigate('/');
	}

	const url = API + "/" + id;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);
                    console.log(url);

					if (response.ok) {
						const json = await response.json();
						setProducts(json);
                        console.log(json)
					} else {
						setError("An error occured");
					}
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}
			fetchData();
		},
		[url]
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<div className="products-detail">
			<h1>{products.title}</h1>
            <h2>${products.price}</h2>
			<p>{products.description}</p>
		</div>
	);
}

export default ProductsDetail;