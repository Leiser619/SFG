package pl.SFG.SGF.api;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import pl.SFG.SGF.dto.hero.MyHeroesResponses;
import pl.SFG.SGF.security.UserPrincipal;
import pl.SFG.SGF.service.ProfileService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/sfg/heroselect")
public class ProfileController {
    private final ProfileService profileService;
    @GetMapping
    public List<MyHeroesResponses> getMyHero(@AuthenticationPrincipal UserPrincipal userPrincipal){
        return profileService.getMyHeroes(userPrincipal.getId());
    };
//    @PostMapping
//    @ResponseStatus(HttpStatus.CREATED)
//    public MyHeroesResponses add(@AuthenticationPrincipal UserPrincipal principal, @Valid@RequestBody Read){
//
//    }


}
