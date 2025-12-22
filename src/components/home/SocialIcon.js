function SocialIcon({ link, icon, label, hoverColor }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{ transition: "color 0.3s ease" }}
            onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
            onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}
        >
            <i className={icon} aria-hidden="true" />
        </a>
    );
}

export default SocialIcon;