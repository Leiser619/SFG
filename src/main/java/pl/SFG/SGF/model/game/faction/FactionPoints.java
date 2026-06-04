package pl.SFG.SGF.model.game.faction;

import jakarta.persistence.*;
import pl.SFG.SGF.model.User;

@Embeddable
public class FactionPoints {

    private int trader;

    private int mage;

    private int assassin;

    public void applyTo(User user) {
        user.setMerchantPoints(user.getMerchantPoints() + trader);
        user.setMagePoints(user.getMagePoints() + mage);
        user.setAssassinPoints(user.getAssassinPoints() + assassin);
    }
}