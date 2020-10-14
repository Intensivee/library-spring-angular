package com.example.server.service;

import com.example.server.dtos.CopyDto;
import com.example.server.entity.Copy;
import com.example.server.mapper.CopyMapper;
import com.example.server.repository.CopyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CopyService {

    private final CopyRepository copyRepository;
    private final CopyMapper copyMapper;

    @Autowired
    public CopyService(CopyRepository copyRepository, CopyMapper copyMapper) {
        this.copyRepository = copyRepository;
        this.copyMapper = copyMapper;
    }

    public List<CopyDto> getCopiesByUserId(Long id){
        List<Copy> copies = this.copyRepository.findByUserId(id);
        return this.copyMapper.copiesToDto(copies);
    }
}
