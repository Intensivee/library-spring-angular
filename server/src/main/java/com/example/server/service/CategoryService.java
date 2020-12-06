package com.example.server.service;

import com.example.server.dtos.CategoryDto;
import com.example.server.entity.Category;
import com.example.server.exception.CategoryNotFoundException;
import com.example.server.mapper.CategoryMapper;
import com.example.server.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    public boolean isEmpty(Long categoryId){
        Category category = this.categoryRepository.findById(categoryId).orElseThrow(CategoryNotFoundException::new);
        return category.getBooks().isEmpty();
    }

    public List<CategoryDto> getByBookId(long id){
        List<Category> categories = this.categoryRepository.findByBookId(id);
        if(categories.isEmpty()){
            throw new CategoryNotFoundException(id);
        }
        return this.categoryMapper.categoriesToDto(categories);
    }

}
