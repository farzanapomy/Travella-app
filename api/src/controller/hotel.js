import Hotel from '../models/Hotel.js';

export const createHotel = async (req, res, next) => {
  const hotel = new Hotel(req.body);
  try {
    const createHotel = await hotel.save();
    res.status(200).json(createHotel);
  } catch (error) {
    next(error);
  }
};
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    console.log('updatedHotel', updatedHotel);
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been Delete ');
  } catch (error) {
    next(error);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    console.log('hotel', hotel);
    if (!hotel) {
      res.status(200).json({
        message: "Couldn't find",
      });
    }
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const getAllHotel = async (req, res, next) => {
  try {
    const { max, min, limit, ...others } = req.query;
    const hotel = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: min || 1, $lte: max || 9999 },
    }).limit(limit || 100);
    console.log('hotels', hotel);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const getByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',');
  try {
    const list = await Promise.all(
      cities.map((city) => {
        // return Hotel.find({ city: city }).length;
        return Hotel.countDocuments({ city: city });
      })
    );
    console.log('get by list', list);
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const getByType = async (req, res, next) => {
  const types = req.query.types.split(',');
  try {
    const type = await Promise.all(
      types.map(async (type) => {
        console.log(type);
        const count = await Hotel.countDocuments({ type: type });
        return {
          type: type,
          count: count,
        };
      })
    );
    console.log(type);
    res.status(200).json(type);
  } catch (error) {
    next(error);
  }
};
