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
}
