var MarkupEntry = (props) => {

  return (
    <div>
      <div>Markup By: {props.author}</div>
      <a target="_blank" href={props.url}>
        <div>{props.title}</div>
      </a>
    </div>
  );

};


window.MarkupEntry = MarkupEntry;
