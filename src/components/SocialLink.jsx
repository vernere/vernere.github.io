const SocialLink = ({icon, link}) => {
    return (
        <li key={link.id}>
            <a href={link}>
                <i className={icon}></i>
            </a>
        </li>
    )
}