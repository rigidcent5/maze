scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . 8 . 8 . 8 . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . . 8 . 8 . 8 . 8 . . . . . 
    . . . . 8 . . 8 . . 8 . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . 8 . 8 . 8 . . . . . . 
    . . . . 8 . . 8 . . 8 . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . 8 . . . 8 . . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`100010000000030209020d0202020202020d000002020c0101010801010101010108000001010c010101080101010101010800000108040101010801010101010101020d0108040101010801010103020101010801080b010101080101010c01010101080108040202020d0101010c0101010108010804010101080101010c0101010108010804010101010101010c0101010108010805060a060601060605060606060801030202020d000c0101010101010108010c01010108000c0101010101010108060603010108000c010101010101010800000c0f0108000c01010101010e0108000005060607000c010101010101010800000000000000050606060606060607`, img`
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 2 2 . . . 2 . . . . . . 2 . . 
    . . . . . . 2 . . . . . . 2 . . 
    . 2 2 . . . 2 . . . . . . . 2 2 
    . 2 2 . . . 2 . . . 2 2 . . . 2 
    . 2 2 . . . 2 . . . 2 . . . . 2 
    . 2 2 . . . 2 . . . 2 . . . . 2 
    . 2 2 . . . 2 . . . 2 . . . . 2 
    . 2 2 . . . . . . . 2 . . . . 2 
    . 2 2 2 2 2 2 . . . 2 2 2 2 2 2 
    . 2 2 2 2 2 . 2 . . . . . . . 2 
    . . . . . 2 . 2 . . . . . . . 2 
    2 2 2 . . 2 . 2 . . . . . . . 2 
    . . 2 . . 2 . 2 . . . . . . . 2 
    . . 2 2 2 2 . 2 . . . . . . . 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.stairLadder,sprites.dungeon.stairWest], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
music.playMelody("A A F C5 B F C C ", 59)
