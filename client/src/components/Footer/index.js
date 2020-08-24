/** @format */

import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

//this component is a sticky footer that appears on each pages
//styling for it to be a footer in ./style.css
//connect each link to our github profiles

function Footer() {
	return (
		<footer className="fixed-bottom footer mt-5 py-3">
			<div className="uk-flex uk-flex-column pl-5">
				<div className="text-color">
					Developed by
				</div>
                
				<div className="uk-flex uk-flex-row uk-flex-center">
					{/* info for Janani */}
					<div className="member-info pl-5">
						<a
							href="https://github.com/janani2285"
							target="_blank"
							rel="noopener noreferrer">
							<img
								className="member-thumbnail"
								src="https://avatars1.githubusercontent.com/u/60902964?s=400&u=f09819b7a8342a29630728a55f962a5b0637427d&v=4"
								alt="Janani Nagaraj Amutha"
							/>
						</a>
						<div className="text-color">
							Janani
							<br />
							Nagaraj Amutha
						</div>
					</div>
					{/* info for Shelby */}
					<div className="member-info pl-5">
						<a
							href="https://github.com/Q118"
							target="_blank"
							rel="noopener noreferrer">
							<img
								className="member-thumbnail"
								src="https://avatars1.githubusercontent.com/u/62257716?s=400&u=4ff63532506aadb20d2adf4ab1addfbc714a00e8&v=4"
								alt="Shelby Anne Rothman"
							/>
						</a>
						<div className="text-color">
							Shelby
							<br />
							Anne Rothman
						</div>
					</div>
					{/* info for Robert */}
					<div className="member-info pl-5">
						<a
							href="https://github.com/robertluttig"
							target="_blank"
							rel="noopener noreferrer">
							<img
								className="member-thumbnail"
								src="https://avatars3.githubusercontent.com/u/66103426?s=400&u=c2186210dbbbd4cb6e07c5da9050201758bb75cf&v=4"
								alt="Robert Luttig"
							/>
						</a>
						<div className="text-color">
							Robert
							<br />
							Luttig
						</div>
					</div>
					{/* info for Jack */}
					<div className="member-info pl-5">
						<a
							href="https://github.com/meierj423"
							target="_blank"
							rel="noopener noreferrer">
							<img
								className="member-thumbnail"
								src="https://avatars3.githubusercontent.com/u/64444043?s=400&u=0ec873bdda09b8069d4c7d857a6002223ea595c0&v=4"
								alt="Jack Meier"
							/>
						</a>
						<div className="text-color">
							Jack
							<br />
							Meier
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
