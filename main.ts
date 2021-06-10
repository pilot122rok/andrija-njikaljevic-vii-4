input.onButtonPressed(Button.A, function () {
    minus_i_plus = 0
    IzbrojBroja(1)
    basic.showNumber(_2_broj)
})
function IzbrojBroja (BrojIzbor: number) {
    if (Koji_broj == 2) {
        if (minus_i_plus == 1) {
            _3_broj = _1_broj + 1
            _3_broj = _1_broj
        } else {
            _3_broj = _1_broj - 1
            _3_broj = _1_broj
        }
    }
    if (Koji_broj == 1) {
        if (minus_i_plus == 1) {
            _1_broj = _1_broj + 1
            Broj = _1_broj
        } else {
            _1_broj = _1_broj - 1
            Broj = _1_broj
        }
    } else {
        if (minus_i_plus == 1) {
            _2_broj = _2_broj + 1
            Broj = _2_broj
        } else {
            _2_broj = _2_broj - 1
            Broj = _2_broj
        }
    }
}
function Pocetak_domaceg (Led_slicica: game.LedSprite) {
    _1_i_1_broj = _1_broj
    _2_i_2_broj = _2_broj
    _3_i_3_broj = _3_broj
    if (_1_i_1_broj == _1_broj) {
        Koi_broj_21 = 0
        _1_broj_ovo(sprite)
    }
    if (_2_i_2_broj == _2_broj) {
        koji_broj_22 = 1
        _2_broj_ovo(sprite)
    }
    if (_3_i_3_broj == _3_broj) {
        koji_broj_23 = 2
        _2_broj_ovo(sprite)
    }
}
function _3_broj_ovo (_3_broj: game.LedSprite, matis: number, logika: boolean) {
    if (_1_broj == 1) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # . # .
            # # # # #
            . # . . .
            `)
    }
    if (_1_broj == 2) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
    if (_1_broj == 3) {
        basic.showLeds(`
            # # . # #
            . # # # .
            . # # # .
            . # . # .
            # # . # #
            `)
    }
    if (_1_broj == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
    if (_1_broj == 5) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # . # # #
            # . . . #
            # # # # #
            `)
    }
    if (_1_broj == 6) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (_1_broj == 7) {
        basic.showLeds(`
            # . . . #
            . # # # .
            # . # . #
            . # # # .
            # . . . #
            `)
    }
    if (_1_broj == 8) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
    if (_1_broj == 9) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            `)
    }
    if (_1_broj == 10) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # # # .
            # . . . #
            . . . . .
            `)
    } else {
        basic.showString("Uveli ste broj veci od 10 ili manji od 1")
    }
}
input.onButtonPressed(Button.AB, function () {
    Koji_broj = 1
    Broj = _2_broj
    basic.showNumber(Broj)
    _1_i_1_broj = _1_broj
})
input.onButtonPressed(Button.B, function () {
    minus_i_plus = 1
    IzbrojBroja(1)
    basic.showNumber(Broj)
})
function _1_broj_ovo (_1_broj: game.LedSprite) {
    if (_2_broj == 1) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # . # .
            # # # # #
            . # . # .
            `)
    }
    if (_2_broj == 2) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
    if (_2_broj == 3) {
        basic.showLeds(`
            # # . # #
            . # # # .
            . # # # .
            . # . # .
            # # . # #
            `)
    }
    if (_2_broj == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
    if (_2_broj == 5) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # . # # #
            # . . . #
            # # # # #
            `)
    }
    if (_2_broj == 6) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (_2_broj == 7) {
        basic.showLeds(`
            # . . . #
            . # # # .
            # . # . #
            . # # # .
            # . . . #
            `)
    }
    if (_2_broj == 8) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
    if (_2_broj == 9) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            `)
    }
    if (_2_broj == 10) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # # # .
            # . . . #
            . . . . .
            `)
    } else {
        basic.showString("Uveli ste broj veci od 10 ili manji od 1")
    }
}
input.onGesture(Gesture.LogoDown, function () {
    Koji_broj = 3
    Broj = _3_broj
    basic.showNumber(Broj)
    _1_i_1_broj = _1_broj
})
function _2_broj_ovo (_2_broj: game.LedSprite) {
    if (_3_broj == 1) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # . # .
            # # # # #
            . # . # .
            `)
    }
    if (_3_broj == 2) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
    if (_3_broj == 3) {
        basic.showLeds(`
            # # . # #
            . # # # .
            . # # # .
            . # . # .
            # # . # #
            `)
    }
    if (_3_broj == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
    if (_3_broj == 5) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # . # # #
            # . . . #
            # # # # #
            `)
    }
    if (_3_broj == 6) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (_3_broj == 7) {
        basic.showLeds(`
            # . . . #
            . # # # .
            # . # . #
            . # # # .
            # . . . #
            `)
    }
    if (_3_broj == 8) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
    if (_3_broj == 9) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            `)
    }
    if (_3_broj == 10) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # # # .
            # . . . #
            . . . . .
            `)
    } else {
        basic.showString("Uveli ste broj veci od 10 ili manji od 1")
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Koji_broj = 0
    Broj = _1_broj
    basic.showNumber(Broj)
    _1_i_1_broj = _1_broj
})
input.onGesture(Gesture.Shake, function () {
    Pocetak_domaceg(sprite)
})
let mala = 0
let veliko = 0
let koji_broj_23 = 0
let koji_broj_22 = 0
let sprite: game.LedSprite = null
let Koi_broj_21 = 0
let _3_i_3_broj = 0
let _2_i_2_broj = 0
let _1_i_1_broj = 0
let Broj = 0
let _1_broj = 0
let _3_broj = 0
let Koji_broj = 0
let _2_broj = 0
let minus_i_plus = 0
basic.showString("Uvedite 3 broja od 1 do 10")
basic.forever(function () {
    if (_2_broj < _1_broj) {
        veliko = _1_broj
    } else {
        veliko = _2_broj
    }
    if (_2_broj > _1_broj) {
        mala = _1_broj
    } else {
        mala = _2_broj
    }
})
