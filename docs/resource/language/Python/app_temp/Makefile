WITH_ENV = env `cat .env 2>/dev/null | xargs`

COMMANDS = help clean compile-deps install-deps lint unittest shell
.PHONY: $(COMMANDS)

help:
	@echo "commands: $(COMMANDS)"

clean:
	@find . -name '*.pyc' -type f -delete
	@find . -name '__pycache__' -type d -delete
	# @find . -type d -empty -delete
	@rm -rf .cache .coverage

install-deps:
	@[ -n "$(VIRTUAL_ENV)" ] || (echo 'out of virtualenv'; exit 1)
	@pip install -U pip setuptools
	@pip install --trusted-host=https://pypi.douban.com/simple/ -r requirements.txt

lint:
	@echo "[\033[94mlint\033[0m] basic"
	@$(WITH_ENV) flake8 --max-line-length=120
	@echo "[\033[94mlint\033[0m] complexity (warning only)"
	# @$(WITH_ENV) flake8 --max-complexity=12 dm || true
