# Rakefile
require "rake"

namespace :assets do

  desc "Precompile assets"
  task :precompile do
    Rake::Task["assets:clean"].invoke
    sh "bundle exec middleman build"
  end

  desc "Remove compiled assets"
  task :clean do
    sh "rm -rf #{File.dirname(__FILE__)}/build/*"
  end

end
