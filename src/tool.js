import Contactraw from "./customization/Contact.json";

export function Path(props) {
    return (
		<p class="path"> 
			<span>&nbsp;<i class="fa-brands fa-apple">&nbsp;&nbsp;</i></span>
			<span>&nbsp;&nbsp;<i class="fa fa-folder-open">&nbsp;</i>{props.path}&nbsp;&nbsp;</span>
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
        <pre style={{ textAlign: "center", fontFamily: "monospace" }}>
            <h2 style={{ display: "inline-block" }}>
                <code>
{`
██████╗  █████╗ ███████╗██╗     ██╗██╗ █████╗ ██████╗ ███████╗     ██████╗ ██████╗  ██████╗ ███████╗██╗██╗     ███████╗███████╗
██╔══██╗██╔══██╗██╔════╝██║     ██║██║██╔══██╗██╔══██╗╚══███╔╝     ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║     ██╔════╝██╔════╝
██████╔╝███████║█████╗  ██║     ██║██║███████║██████╔╝  ███╔╝█████╗██████╔╝██████╔╝██║   ██║█████╗  ██║██║     █████╗  ███████╗
██╔══██╗██╔══██║██╔══╝  ██║     ██║██║██╔══██║██╔══██╗ ███╔╝ ╚════╝██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║     ██╔══╝  ╚════██║
██║  ██║██║  ██║██║     ███████╗██║██║██║  ██║██║  ██║███████╗     ██║     ██║  ██║╚██████╔╝██║     ██║███████╗███████╗███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝     ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝
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
