import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import PropTypes from "prop-types";
import { LanguageConsumer } from "../contexts/LanguageContext";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }
  onInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML, // Ingat! innerHTML, bukan value.
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  render() {
    return (
      <LanguageConsumer>
        {({ language }) => {
          return (
            <form
              className="add-new-page__input"
              onSubmit={this.onSubmitEventHandler}
            >
              <input
                type="text"
                placeholder={
                  language === "eng" ? "Your secret note" : "Catatan rahasiamu"
                }
                className="add-new-page__input__title"
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
              />
              <div
                className="add-new-page__input__body"
                data-placeholder={
                  language === "eng"
                    ? "This is my secret note..."
                    : "Ini adalah catatan rahasiaku..."
                }
                contentEditable
                onInput={this.onInputHandler}
              />
              <div className="add-new-page__action">
                <button className="action" type="submit">
                  <BsCheck2Circle />
                </button>
              </div>
            </form>
          );
        }}
      </LanguageConsumer>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
export default NoteInput;
