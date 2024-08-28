import Contactraw from "./customization/Contact.json";

export function Path(props) {
    return (
		<p class="path"> 
			<span>&nbsp;<i class="fa-solid fa-terminal" style={{ color: '#000000' }}>&nbsp;&nbsp;</i></span>
			<span>&nbsp;&nbsp;<i class="fa fa-folder-tree" style={{ color: '#FFD43B' }}>&nbsp;</i>{props.path}&nbsp;&nbsp;</span>
		</p>
    );
}

export function Code(props) {
    return (
        <p id="code">
            &nbsp;&gt; {props.command} <br/>
        </p>
    );
}



export function ASCII() {
    return (
        <pre style={{ 
            textAlign: "center", 
            fontFamily: "monospace", 
           
        }}>
            <h2 style={{ display: "inline-block", boxShadow: "0 4px 8px rgba(27, 202, 255, 0.6)", /* Shadow parameters */
            padding: "5px",
            margin: "5px",width: "950px", /* Optional: Add padding if needed */
            borderRadius: "10px" /* Optional: Add border radius if desired */ }}>
                <code>
{`
██████╗  █████╗ ███████╗██╗     ██╗██╗ █████╗ ██████╗ ███████╗     ██████╗ ██████╗  ██████╗ ███████╗██╗██╗     ███████╗███████╗
██╔══██╗██╔══██╗██╔════╝██║     ██║██║██╔══██╗██╔══██╗╚══███╔╝     ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║     ██╔════╝██╔════╝
██████╔╝███████║█████╗  ██║     ██║██║███████║██████╔╝  ███╔╝█████╗██████╔╝██████╔╝██║   ██║█████╗  ██║██║     █████╗  ███████╗
██╔══██╗██╔══██║██╔══╝  ██║     ██║██║██╔══██║██╔══██╗ ███╔╝ ╚════╝██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║     ██╔══╝  ╚════██║
██║  ██║██║  ██║██║     ███████╗██║██║██║  ██║██║  ██║███████╗     ██║     ██║  ██║╚██████╔╝██║     ██║███████╗███████╗███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝     ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
`}
                </code>                 
            </h2>
        </pre>
    );
}




export function Contact() {
    return (
        <div className="contact">
            <p>
                <a href={`mailto:${Contactraw.email}`} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-envelope"></i> Email: [{Contactraw.email}]
                </a>
            </p>
            <p>
                <a href={`https://wa.me/${Contactraw.phone}`} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp: [{Contactraw.phone}]
                </a>
            </p>
        </div>
    );
}
