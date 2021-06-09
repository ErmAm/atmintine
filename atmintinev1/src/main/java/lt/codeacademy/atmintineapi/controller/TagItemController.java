package lt.codeacademy.atmintineapi.controller;


import lt.codeacademy.atmintineapi.model.TagItem;
import lt.codeacademy.atmintineapi.service.TagItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/atmintine/api")
public class TagItemController {

    private TagItemService tagItemService;

    public TagItemController(TagItemService tagItemService) {
        this.tagItemService = tagItemService;
    }

    //    Šitas susirenka viską viską
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<TagItem> getTagItems() {
        return tagItemService.getTagItems();
    }

    @GetMapping(value = "/{UUID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public TagItem getTagItem(@PathVariable("UUID") UUID uuid) {
        return tagItemService.getTagItem(uuid);
    }

    @GetMapping(value = "/{name}/name", produces = MediaType.APPLICATION_JSON_VALUE)
    public TagItem getTagItemByName(@PathVariable String name) {
        return tagItemService.getTagItemByName(name);
    }

    @GetMapping(value = "/search", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<TagItem> searchTagItem(@RequestParam String query) {
        return tagItemService.findTagItem(query);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createTagItem(@Valid @RequestBody TagItem tagItem) {
        tagItemService.addTagItem(tagItem);
    }

    @DeleteMapping(value = "/{UUID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTagItem(@PathVariable("UUID") UUID uuid) {
        tagItemService.delete(uuid);
    }

    @PutMapping
    public TagItem updateTagItem(@Valid @RequestBody TagItem tagItem) {
        return tagItemService.update(tagItem);
    }


}
