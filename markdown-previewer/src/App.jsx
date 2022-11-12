/** @format */
import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
// import ReactMarkdown from "react-markdown";
import {defoultText} from "./const";
import {marked} from "marked";

export const App = () => {
    const [previewerView, setpPreviewerView] = useState(defoultText);

    return (
        <Container
            style={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                backgroundColor: "#fae3d9",
            }}>
            <Row>
                <div className='col fs-1 text-center'>
                    My Markdown Previewer
                </div>
            </Row>
            <Row>
                <Col style={{backgroundColor: "#bbded6"}} className='col-6'>
                    Editor
                    <div className=''>
                        <textarea
                            rows='15'
                            value={previewerView}
                            id='editor'
                            className='col-12 h-100'
                            style={{backgroundColor: "#ffb6b9"}}
                            onChange={(e) =>
                                setpPreviewerView(e.target.value)
                            }></textarea>
                    </div>
                </Col>
                <Col style={{backgroundColor: "#8ac6d1"}} className='col-6'>
                    Previewer
                    <div
                        id='preview'
                        dangerouslySetInnerHTML={{
                            __html: marked(previewerView),
                        }}></div>
                </Col>
            </Row>
        </Container>
    );
};
