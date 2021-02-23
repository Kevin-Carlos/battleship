/**
 * ### Battleship ship types
 * * carrier - 5
 * * battleship - 4
 * * destroyer - 3
 * * submarine - 3
 * * patrol boat - 2
 */
interface ShipDetails {
  carrier: Carrier;
  battleship: Battleship;
  destroyer: Destroyer;
  submarine: Submarine;
  patrol_boat: PatrolBoat;
}

interface Placement {
  [key: number]: number;
}

interface Carrier {
  type: "carrier";
  details: {
    size: 5;
    placement: Placement;
  };
}

interface Battleship {
  type: "battleship";
  details: {
    size: 4;
    placement: Placement;
  };
}

interface Destroyer {
  type: "destroyer";
  details: {
    size: 3;
    placement: Placement;
  };
}

interface Submarine {
  type: "submarine";
  details: {
    size: 3;
    placement: Placement;
  };
}

interface PatrolBoat {
  type: "patrol-boat";
  details: {
    placement: Placement;
    size: 2;
  };
}

const getDefaultShipInfo = () => {
  const details: ShipDetails = {
    carrier: {
      type: "carrier",
      details: {
        size: 5,
        placement: {},
      },
    },
    battleship: {
      type: "battleship",
      details: {
        size: 4,
        placement: {},
      },
    },
    destroyer: {
      type: "destroyer",
      details: {
        size: 3,
        placement: {},
      },
    },
    submarine: {
      type: "submarine",
      details: {
        size: 3,
        placement: {},
      },
    },
    patrol_boat: {
      type: "patrol-boat",
      details: {
        size: 2,
        placement: {},
      },
    },
  };

  return details;
};
