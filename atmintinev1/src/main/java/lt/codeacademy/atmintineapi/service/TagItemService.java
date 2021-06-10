package lt.codeacademy.atmintineapi.service;


import lt.codeacademy.atmintineapi.exception.TagItemNotFoundException;
import lt.codeacademy.atmintineapi.model.TagItem;
import lt.codeacademy.atmintineapi.repository.TagItemRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class TagItemService {

    TagItemRepository tagItemRepository;

    public TagItemService(TagItemRepository tagItemRepository) {
        this.tagItemRepository = tagItemRepository;
    }

    public void addTagItem(TagItem tagItem){
        try {
            if (tagItem != null){
                tagItemRepository.save(tagItem);
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

    public TagItem getTagItem(UUID id){
        return tagItemRepository.findById(id)
                .orElseThrow(() -> new TagItemNotFoundException(id.toString()));
    }

    public TagItem getTagItemByName(String name){
        return tagItemRepository.findByName(name).get(0);
    }

    public List<TagItem> getTagItems(){
        return tagItemRepository.findAll();
    }



//    TODO Čia biški logika keista man reikia vėliau apsižiūrėti
    public TagItem update(TagItem tagItem){
        return tagItemRepository.save(tagItem);
    }

    public void delete(UUID id){
        tagItemRepository.deleteById(id);
    }

//    Pagerinti metodai
//    Paginated kol kas nereikia.
    public Page<TagItem> getProductsPaginated(Pageable pageable) {
        return tagItemRepository.findAll(pageable);
    }

    public List<TagItem> findTagItem(String query){
        if (query == null || query.length() == 0) {
            return Collections.emptyList();
        }

        return tagItemRepository.findByNameLikeOrDescriptionLike("%"+query+"%", "%"+query+"%");
    }





}
