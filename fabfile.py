from fabric.api import *
import os

env.hosts = ['tei.firebelly.co']
env.user = 'firebelly'
env.path = '~/Sites/expert-institute'
env.remotepath = '/home/firebelly/webapps/expert_institute'
env.git_branch = 'master'
env.warn_only = True
env.remote_protocol = 'http'

def build():
  local('npx gulp --production')

def deploy():
  update()

def update():
  with cd(env.remotepath):
    run('git pull origin {0}'.format(env.git_branch))
