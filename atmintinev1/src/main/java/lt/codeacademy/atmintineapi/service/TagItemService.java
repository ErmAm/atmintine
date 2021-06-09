package lt.codeacademy.atmintineapi.service;


import lt.codeacademy.atmintineapi.repository.TagItemRepository;
import org.springframework.stereotype.Service;

@Service
public class TagItemService {

    TagItemRepository tagItemRepository;

    public TagItemService(TagItemRepository tagItemRepository) {
        this.tagItemRepository = tagItemRepository;
    }


}
