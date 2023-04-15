import { useState } from "react";

export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw__followCard-button isFollowing"
    : "tw__followCard-button";
  return (
    <article className="tw__followCard">
      <header className="tw__followCard-header">
        <img
          className="tw__followCard-avatar"
          src="https://avatars.githubusercontent.com/u/74114731?v=4"
          alt=""
        />
        <div className="tw__followCard-info">
          <strong>{name}</strong>
          <span className="tw__followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={buttonClassName}
        >
          {text}
        </button>
      </aside>
    </article>
  );
}
