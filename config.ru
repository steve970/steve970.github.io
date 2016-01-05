require 'middleman-core/load_paths'
::Middleman.setup_load_paths

require 'middleman-core'
require 'middleman-core/rack'

require 'fileutils'
FileUtils.mkdir('log') unless File.exist?('log')
::Middleman::Logger.singleton("log/#{ENV['RACK_ENV']}.log")

app = ::Middleman::Application.new

run ::Middleman::Rack.new(app).to_app

require "bundler"
Bundler.setup("production")

require "rack/contrib/try_static"
require "rack/contrib/not_found"

use Rack::TryStatic, {
  root: "build",
  urls: %w[/],
  try:  %w[
    .html index.html /index.html
    .xml  index.xml  /index.xml
  ]
}

run Rack::NotFound.new("build/404/index.html")
