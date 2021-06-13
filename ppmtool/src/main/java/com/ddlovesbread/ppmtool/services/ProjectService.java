package com.ddlovesbread.ppmtool.services;

import com.ddlovesbread.ppmtool.domain.Project;
import com.ddlovesbread.ppmtool.domain.User;
import com.ddlovesbread.ppmtool.exceptions.ProjectIdException;
import com.ddlovesbread.ppmtool.repositories.ProjectRepository;
import com.ddlovesbread.ppmtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    public Project saveOrUpdateProject(Project project, String username) {
        try{
            System.out.println("username: " + username);
            User user = userRepository.findByUsername(username);
            project.setUser(user);
            project.setProjectLeader(username);

            return projectRepository.save(project);
        }catch (Exception e) {
            throw new ProjectIdException("Project ID: " + project.getProjectIdentifier() + " already exists.");
        }
    }

    public Project findProjectByIdentifier(String projectId, String username) {

        Project project = projectRepository.findByProjectIdentifier(projectId);

        if(project == null){
            throw new ProjectIdException("Project ID: " + projectId + " doesn't exist.");
        }

        if(!project.getProjectLeader().equals(username)){
            throw new ProjectIdException("Project ID: " + projectId + " not found in your account");
        }

        return project;
    }

    public Iterable<Project> findAllProject(String username){
        return projectRepository.findAllByProjectLeader(username);
    }

    public void deleteProjectById(String projectId, String username){
        projectRepository.delete(findProjectByIdentifier(projectId, username));
    }
}
