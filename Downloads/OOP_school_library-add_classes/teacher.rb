require_relative './main'

class Teacher < Person
  attr_accessor :specialization
  
  def initialize(age, specialization, name = 'unknown', parent_permission: true)
    super(age, name, parent_permission)
    @specialization = specialization
  end

  def can_use_services?
    true
  end
end
