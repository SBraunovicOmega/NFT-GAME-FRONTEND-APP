const CONTRACT_ADDRESS = '0x30E961610660723889de27C8534bea9D92899F67'


const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };

export { CONTRACT_ADDRESS,transformCharacterData };

