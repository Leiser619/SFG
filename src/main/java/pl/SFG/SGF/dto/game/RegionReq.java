package pl.SFG.SGF.dto.game;

public record RegionReq(String name,
                        String description,
                        String backgroundUrl,
                        int requiredLevel
                        ) {
}
