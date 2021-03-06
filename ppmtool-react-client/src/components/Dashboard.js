import React, { Component } from 'react'
import CreateProjectButton from './project/CreateProjectButton';
import ProjectItem from './project/ProjectItem';
import { connect } from "react-redux";
import { getProjects } from '../actions/projectActions';
import PropTypes from "prop-types";

class Dashboard extends Component {

    componentDidMount(){
        this.props.getProjects();
    }

    render() {

        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br />
                            <CreateProjectButton />
                            <br />
                            <hr />
                            {this.props.projects.map((project) => (
                                <ProjectItem key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    projects: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
};

const mapStateToProps = (state) => (
    {projects: state.project.projects}
)

export default connect(mapStateToProps, {getProjects})(Dashboard);
