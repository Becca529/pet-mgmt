import React from "react";
import requiresLogin from "../common/RequiresLogin";
import "./PetProfileCard.css";
import "./Table.css";

export function Table(props) {
  if (!props.title) {
    return (
      <>
        <td>{props.title}</td>
        <td>{props.subtitle}</td>
        <td />
      </>
    );
  }
  return (
    <>
      <td>{props.title}</td>
      <td>{props.subtitle}</td>
      <td className="table-btn">
        <button
          className="link"
          onClick={props.onClickView.bind(this, props.vet, props.route)}>
          View/Edit
        </button>
        <button
          className="link"
          onClick={props.onClickDelete.bind(this, props.id, props.route)}>
          Delete
        </button>
      </td>
    </>
  );
}

export default requiresLogin()(Table);
