FactoryBot.define do
  factory :story do
    name { Faker::Lorem.word.capitalize }
  end
end
