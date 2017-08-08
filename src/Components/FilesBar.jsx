import React, {Component} from 'react';
import '../css/HtmlStyle.css';

function Files(props) {
  var fileStyle = {};
  if (props.indexed == 0) {
    fileStyle = {
      height: "36px",
      width: "198px",
      color: "#333333",
      backgroundColor: "#FFFFFF",

    }
  } else {
    fileStyle = {
      height: "36px",
      width: "198px",
      color: "#FFFFFF",
      backgroundColor: "#116CD6",
    }
  }
  const imageStyle = {
    float: "left",
    margin: "0",
    marginLeft: "6px",
    padding: "12px",
    maxWidth: "30px",
    /*height: 30px;*/
    opacity: "1.0",
    marginTop: "6px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${props.image})`
  }
  console.log(props.text);
    return (
      <div style={fileStyle} onClick={props.onClick}>
        <div style={imageStyle} ></div>
        <div id="filesDiv">
          <p>{props.text}</p>
        </div>
      </div>

    );


}

class FilesBar extends Component {

  renderFile(i) {
    var indexReturn = 0;
    if (i == this.props.fileIndex) {
      indexReturn = 1;
    }
    console.log(this.props.filesText[i]);
    return (
      <Files
      indexed={indexReturn}
      text={this.props.filesText[i]}
      image={this.props.filesImage[i]}
      onClick= {() => this.props.onClick(i)}
    />);
  }

  numberFilesToRender() {
    console.log(this.props.filesText);
    var combinedRenders =[];
    for (var i = 0; i < (this.props.filesText).length; i++) {
      combinedRenders.push(this.renderFile(i));

    }
    return (
      <div>
        {combinedRenders}
      </div>
    );


  }

  render() {
    console.log("num files filled");
    return (
      <div>
        {/* {this.renderFile(0)} */}

        {/* {this.renderFile(1)} */}
        {this.numberFilesToRender()}

      </div>
    );
  }

}

export default FilesBar;