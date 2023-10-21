        """CLASS INHERITANCE"""

"""
If we override a method, then the new method must be defined in such a way that it does everything you want it to do, which may include everything from the original method!
"""

    """ Exemple 1 """
    
class Shape(object):
  """Makes shapes!"""
  def __init__(self, number_of_sides):
    self.number_of_sides = number_of_sides

# Add your Triangle class below!
class Triangle(Shape):
  def __init__(self, side1, side2, side3):
    self.side1 = side1
    self.side2 = side2
    self.side3 = side3


    """ Exemple 2 """
    
class Employee(object):
  def __init__(self, employee_name):
    self.employee_name = employee_name

  def calculate_wage(self, hours):
    self.hours = hours
    return hours * 20.00


class PartTimeEmployee(Employee):
  def calculate_wage(self, hours):
    self.hours = hours
    return hours * 12.00
  
  def full_time_wage(self, hours):
  """
  to re-use the method of the parent class, we can use the « super » keyword
  """
    return super(PartTimeEmployee, self).calculate_wage(hours)

milton = PartTimeEmployee("Milton")
print milton.full_time_wage(10)


    """ Exemple 3 """

class Car(object):
  condition = "new"
  def __init__(self, model, color, mpg):
    self.model = model
    self.color = color
    self.mpg   = mpg

  def display_car(self):
    return "This is a %s %s with %s MPG." %(self.color, self.model, str(self.mpg))

  def drive_car(self):
    self.condition = "used"

my_car = Car("DeLorean", "silver", 88)

print my_car.condition
my_car.drive_car()
print my_car.condition

class ElectricCar(Car):
  def __init__(self, model, color, mpg, battery_type):
    """
    Instead of writting all attributes again, 
    self.model = model
    self.color = color
    self.mpg   = mpg
    
    we can use the « super » keyword on the __init__ method:
    """
    super(ElectricCar, self).__init__(model, color, mpg)
    self.battery_type = battery_type

my_car = ElectricCar("GT", "blue", 120, "molten salt")