import React from "react";
import Pubraw from "./customization/Publication.json";
import "./styles/main.css";


export function Pub() {
    const journal = [];
    // eslint-disable-next-line array-callback-return
    Pubraw.journal.map((paper) => {
        journal.push(
            <li><span>
                <b>Title : {paper.title}</b><br/>
                Publisher : {paper.author} <br/>
                Organization : {paper.organization}  <br/>
                Date Publish : {paper.date}  <br/>
                <a href={paper.link} target="_blank"  rel="noreferrer">[Certificate Document]</a>
            </span></li>
        );
    });
    // const conference = [];
    // Pubraw.conference.map((paper) => {
    //     conference.push(
    //         <li><span>
    //             <b>{paper.title}</b><br/>
    //             {paper.author} <br/>
    //             {paper.organization}  <br/>
    //             <a href={paper.link} target="_blank"  rel="noreferrer">[Paper]</a>
    //         </span></li>
    //     );
    // });
    return (
        
        <div class="pub-list">
			<p>Certificate Owned</p>
			<ul>
				{journal}
			</ul>
			{/* <p>Conference papers</p>
			<ul>
				{conference}
			</ul> */}

		</div>
    );
}

export default Pub;