function orientationCorrector(a, b, c, d, x, y, z){ // q1, q2, q3, q4, x, y, z
  
  let accelXYZ = [];
  
  accelXYZ = new [3];
  
  let r = -b * x - c * y - d * z;
  
  let s =  a * x + c * z - d * y;
  
  let n =  a * y - b * z + d * x;
  
  let w =  a * z + b * y - c * x;
    
  accelXYZ[0] = s * a - r * b + w * c - n * d);
  
  accelXYZ[1] = n * a - w * b - r * c + s * d;
  
  acellXYZ[2] = w * a + n * b - s * c - r * d;
  
  return accelXYZ;
}
