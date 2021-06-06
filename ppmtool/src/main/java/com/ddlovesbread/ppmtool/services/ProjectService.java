package com.ddlovesbread.ppmtool.services;

import com.ddlovesbread.ppmtool.domain.Project;
import com.ddlovesbread.ppmtool.exceptions.ProjectIdException;
import com.ddlovesbread.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project) {
        try{
            return projectRepository.save(project);
        }catch (Exception e) {
            throw new ProjectIdException("Project ID: " + project.getProjectIdentifier() + " already exists.");
        }
    }

    public Project findProjectByIdentifier(String projectId) {

        Project project = projectRepository.findByProjectIdentifier(projectId);

        if(project == null){
            throw new ProjectIdException("Project ID: " + projectId + " doesn't exist.");
        }

        return projectRepository.findByProjectIdentifier(projectId);
    }

    public Iterable<Project> findAllProject(){
        return projectRepository.findAll();
    }

    public void deleteProjectById(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId);
        if(project == null){
            throw new ProjectIdException("Cannot delete project with ID " + projectId + " . This project does not exist.");
        }
        projectRepository.delete(project);
    }
}
