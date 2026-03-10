package pl.SFG.SGF.api;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.SFG.SGF.dto.hero.MyHeroesResponses;
import pl.SFG.SGF.model.Hero;
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


}
