package pl.SFG.SGF.api.admin;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.SFG.SGF.service.game.EnemyService;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/admin_panel/enemy")
@PreAuthorize("hasRole('ADMIN')")
public class EnemyController {

    private final EnemyService enemyService;


}
